from flask import Flask
from flask_cors import CORS
import random

import logging

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)
CORS(app)

@app.route('/hi')
def hi():
    print("Say hi nigga")
    return f"{random.randint(1,100)}: Hi nigga"

app.run(port=4000)
