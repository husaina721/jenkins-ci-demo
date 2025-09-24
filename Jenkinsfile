pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/<your-username>/my-jenkins-app.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "No tests yet!"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage (you can add deployment commands here)'
            }
        }
    }
}
