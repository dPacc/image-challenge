import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO

def resize_image(image_data, width=150):
    height = len(image_data)
    resized_data = np.array(Image.fromarray(image_data).resize((width, height), resample=Image.BILINEAR))
    return resized_data

def apply_color_map(image_data, cmap='viridis'):
    plt.imshow(image_data, cmap=cmap)
    plt.axis('off')
    buffer = BytesIO()
    plt.savefig(buffer, format='png', bbox_inches='tight', pad_inches=0)
    buffer.seek(0)
    return buffer.getvalue()