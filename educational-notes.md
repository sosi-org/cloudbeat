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

kubectl get deployments

kubectl config view
(shows a yaml-like output)

kubectl expose deployment hello-node2 --type=LoadBalancer --port=8080

kubectl get services

minikube service hello-node2


> minikube service hello-node2
> |-----------|-------------|-------------|-----------------------------|
> | NAMESPACE |    NAME     | TARGET PORT |             URL             |
> |-----------|-------------|-------------|-----------------------------|
> | default   | hello-node2 |             | http://192.168.99.100:31936 |
> |-----------|-------------|-------------|-----------------------------|
> 🎉  Opening service default/hello-node2 in default browser...


kubectl delete service hello-node
kubectl delete deployment hello-node
