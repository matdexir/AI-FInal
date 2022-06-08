# AI-Final
## Made with
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white)

## Screenshots

### Light Mode
![Light Mode]("./screenshots/light_mode.png")

### Dark Mode
![Dark Mode]("./screenshots/dark_ish_mode.png")

## Frontend 
### Usage
Install all the dependencies with:

`yarn`

To run the android app for android:

`yarn android`

If it does not work refer to:
![Expo](https://docs.expo.dev/workflow/expo-cli/)


## Backend
### Usage

I used FastAPI since I didn't quite get how to get Flask to work. But I should be able to fix the issues with Flask later

First(PLEASE run it in Virtualenv): 
`pip install requirements.txt`

To run it:
NOTE: the port is hard-coded for now but I will fix it later
`uvicorn main:app --reload --port 8000`
