from src import db

class ImageData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    depth = db.Column(db.Float, nullable=False)
    image_data = db.Column(db.LargeBinary, nullable=False)
    resized_image_data = db.Column(db.LargeBinary, nullable=False)