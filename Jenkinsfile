pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Chronex...'

                git branch: 'main',
                    url: 'https://github.com/ajeetht25-hub/chronex.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Chronex...'
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build...'

                archiveArtifacts artifacts: '.next/**',
                    allowEmptyArchive: false
            }
        }
    }

    post {
        success {
            echo 'Chronex build completed successfully!'
        }

        failure {
            echo 'Chronex build failed!'
        }
    }
}
