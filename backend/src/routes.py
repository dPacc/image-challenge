from flask import Blueprint, request, jsonify
from src import db
from src.models import ImageData
from src.utils import resize_image, apply_color_map
import numpy as np
import pandas as pd
import base64

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Server running successfully'})


@main.route('/upload', methods=['POST'])
def upload_csv():
    file = request.files['file']
    df = pd.read_csv(file)
    for _, row in df.iterrows():
        depth = row['depth']
        image_data = row.iloc[1:].values.reshape(-1, 200)
        resized_data = resize_image(image_data)
        image_record = ImageData(depth=depth, image_data=image_data.tobytes(), resized_image_data=resized_data.tobytes())
        db.session.add(image_record)
    db.session.commit()
    return jsonify({'message': 'CSV data uploaded successfully'})

@main.route('/frames', methods=['GET'])
def get_frames():
    depth_min = float(request.args.get('depth_min'))
    depth_max = float(request.args.get('depth_max'))
    frames = ImageData.query.filter(ImageData.depth >= depth_min, ImageData.depth <= depth_max).all()
    frame_data = []
    for frame in frames:
        image_data = np.frombuffer(frame.image_data, dtype=np.uint8).reshape(-1, 200)
        resized_image_data = np.frombuffer(frame.resized_image_data, dtype=np.uint8).reshape(-1, 150)
        color_mapped_data = apply_color_map(resized_image_data)
        base64_data = base64.b64encode(color_mapped_data).decode('utf-8')
        frame_data.append(base64_data)
    return jsonify({'frames': frame_data})