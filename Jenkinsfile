pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
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
                echo 'Building Next.js application...'
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: '.next/**',
                    allowEmptyArchive: false
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo 'Build completed successfully!'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'Build failed!'
            echo 'Check the Jenkins console output.'
            echo '======================================'
        }

        always {
            echo 'Jenkins pipeline finished.'
        }
    }
}
