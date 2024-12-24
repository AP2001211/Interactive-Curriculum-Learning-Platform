from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/datasets', methods=['GET'])
def get_datasets():
    datasets = ["MNIST", "CIFAR-10", "Fashion-MNIST", "SVHN"]
    return jsonify(datasets)

@app.route('/api/schedule', methods=['POST'])
def create_schedule():
    data = request.json
    dataset = data.get('dataset')
    complexity = data.get('complexity')
    return jsonify({
        "message": "Schedule created successfully!",
        "details": {
            "dataset": dataset,
            "complexity": complexity
        }
    })

if __name__ == "__main__":
    app.run(debug=True, port=5001)
