from src import create_app, db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        # Create the database if it doesn't exist
        db.create_all()
        
        app.run(host='0.0.0.0', port=8002)