import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO

def resize_image(image_data, width=150):
    height = len(image_data)
    resized_data = np.array(Image.fromarray(image_data).resize((width, height), resample=Image.BILINEAR))
    return resized_data

def apply_color_map(image_data, cmap='viridis'):
    fig, ax = plt.subplots(figsize=(1.5, 1.5))  # Adjust the figure size as needed
    ax.imshow(image_data, cmap=cmap)
    ax.axis('off')
    ax.set_position([0, 0, 1, 1])  # Remove padding around the image
    buffer = BytesIO()
    fig.savefig(buffer, format='png', bbox_inches='tight', pad_inches=0)
    buffer.seek(0)
    plt.close(fig)  # Close the figure to free up memory
    return buffer.getvalue()