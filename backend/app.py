from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS to allow React to make requests to this server

# POST route to send emails
@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    firstname = data.get('firstname')
    sender_email = data.get('email')  # Sender's email from the form
    phone = data.get('phone', 'Not provided')
    message = data.get('message')

    # Email configuration from environment variables
    server_email = os.getenv('SERVER_EMAIL')  # Replace with your email from .env file
    server_password = os.getenv('SERVER_PASSWORD')  # Replace with your email password from .env file
    recipient_email = os.getenv('RECIPIENT_EMAIL')  # Your email to receive messages

    subject = f"New Contact Request from {firstname}"
    body = f"""
    You have received a new contact request:

    Name: {firstname}
    Email: {sender_email}
    Phone: {phone}
    Message: {message}
    """

    try:
        # Connect to the email server and send the email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()  # Secure the connection
            server.login(server_email, server_password)
            email_message = f"From: {sender_email}\nTo: {recipient_email}\nSubject: {subject}\n\n{body}"
            server.sendmail(sender_email, recipient_email, email_message)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Error sending email"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
