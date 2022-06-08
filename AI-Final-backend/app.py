from flask import Flask
from flask_cors import CORS
import random

import logging

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)
CORS(app)

@app.route('/hi')
def hi():
    ret = ["normal", "sick"] 
    return ret[random.randint(0, 1)]

app.run(port=8000)
