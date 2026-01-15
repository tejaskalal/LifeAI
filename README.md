# LifeAI: health tracker and wellness advisor - README

## Project Overview
LifeAI is a health focused AI web application designed to help users understand, monitor, and improve their overall well being through data driven insights.
The platform allows users to enter daily health and lifestyle information such as sleep duration, water intake, physical activity, and mood. 
Based on this data, LifeAI calculates key health metrics like BMI and an overall health score, giving users a clear snapshot of their current health status.

---

## Features
- User Health Data Collection
Collects personal and lifestyle details such as age, height, weight, sleep hours, water intake, physical activity, and mood.

- Health Metrics Calculation
Automatically calculates BMI (Body Mass Index) and an overall Health Score based on user inputs.

- AI-Based Health Insights
Provides personalized suggestions and health status  to guide users toward healthier habits.

- Interactive Dashboard
Displays health data using charts, activity cards, and profile summaries for easy understanding and tracking.

- Secure User Access
Supports user authentication to ensure personalized and private health data management.

- AI Health Chatbot 
Integrated Ollama Phi model for instant, stateless health-related queries.
  

---

## Tech Stack

### **Frontend:**

- React.js
- Axios
- Bootstrap
- React icon
- Recharts
- CSS

### **Backend:**

- Node.js
- Express.js
- MongoDB + Mongoose
- Database
- Health Score Logic
- Rule-based AI health suggestions
- Algorithm Used: Random Forest Classifier

---

## How to Run the Project Locally

### **1️ Clone the repository**

```bash
git clone https://github.com/tejaskalal/LifeAI.git
cd LifeAI
```

### **2 Setup AI Service**

```bash
cd ai-service
python -m venv venv
```
#### **2.1 for windows**

```bash
venv\Scripts\activate
```

#### **2.2 for linux/macos**

```bash
source venv/bin/activate
```
#### **2.3 install dependancies**

```bash
pip install -r requirements.txt
```
#### **2.4 Run ai service**

```bash
python app.py
```

### **3 Setup Backend (Node.js + Express.js)**

```bash
cd backend
```

```bash
npm install
```

```bash
npm start
```

#### **created .env file inside backend**
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### **4 Setup frontend (React.js)**

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

---

## Project Structure

```
LifeAI/
│
├── ai-service/ # AI / ML Service (Python)
│ ├── venv/
│ ├── app.py
│ ├── features.pkl
│ ├── random_forest_model.pkl
│ └── requirements.txt
│
├── backend/ # Node.js + Express Backend
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── utils/
│ ├── .env
│ ├── package.json
│ └── server.js
│
├── frontend/ # React + Vite Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── dashboardUtils/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── vite.config.js
│ └── package.json

```

## Project Architecture

<img width="430" height="444" alt="Screenshot 2026-01-15 165347" src="https://github.com/user-attachments/assets/3f11a262-96e8-489c-a561-bc13beb3544d" />

---

## Future Enhancement

- Improved machine learning models for more accurate health predictions
- Enhanced health scoring logic with more parameters
- User-friendly UI improvements
- Smart in app health alerts and reminders
- Store AI chat history securely for each user
- Risk based alerts for unhealthy patterns
- Improved dashboard animations and accessibility

---


## Sample visuals of project
- Graph and AI insights
<img width="1897" height="841" alt="Screenshot 2026-01-15 132837" src="https://github.com/user-attachments/assets/2e4ac37a-695b-428d-82e7-f44f9785159d" />

- Activity cards
  <img width="1892" height="509" alt="Screenshot 2026-01-15 132824" src="https://github.com/user-attachments/assets/5632a213-b7aa-4ee3-9480-37710edfdf56" />

- AI Chatbot
  <img width="1842" height="803" alt="image" src="https://github.com/user-attachments/assets/ec472c7e-2e02-4d18-847c-afc5f1e7fecf" />

- About page
 <img width="1842" height="829" alt="image" src="https://github.com/user-attachments/assets/e820905f-cf9d-4adb-ad45-8381f29f0149" />
 

## Conclusion

LifeAI is a full-stack, AI-powered health monitoring application focused on analyzing user health data and providing personalized insights. The project emphasizes preventive healthcare by identifying strengths, concerns, and actionable suggestions through AI and rule-based logic. With interactive dashboards and intelligent analysis, LifeAI helps users better understand and improve their daily health habits




