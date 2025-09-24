pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/husaina721/jenkins-ci-demo.git'
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
                echo 'Deploy stage'
            }
        }
    }
}
