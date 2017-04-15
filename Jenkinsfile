node {
        stage("Build") {

            checkout scm

            docker.build('app:base').inside {
           }
        }

        stage("Test") {

            docker.build('app','. -f Dockerfile').inside {
           }

        }

        // Clean up workspace
        step([$class: 'WsCleanup'])
}