Installation:
[
Follow installation of MiniKube
https://kubernetes.io/docs/tasks/tools/install-minikube/


MacOS: check

sysctl -a | grep -E --color 'machdep.cpu.features|VMX'

brew install minikube
]

starting
[
minikube start --vm-driver=virtualbox
// minikube start
// minikube start --vm-driver=hyperkit
// hyperkit | virtualbox

The 'hyperkit' driver requires elevated permissions. The following commands will be executed:

    $ sudo chown root:wheel /Users/a9858770/.minikube/bin/docker-machine-driver-hyperkit 
    $ sudo chmod u+s /Users/a9858770/.minikube/bin/docker-machine-driver-hyperkit 

minikube status



> host: Running
> kubelet: Running
> apiserver: Running
> kubeconfig: Configured


minikube stop

]

minikube start
minikube dashboard

cd service-catalog/simple-helloworld
docker build . -t sosi/abc

kubectl create deployment hello-node2 --image=sosi/abc
