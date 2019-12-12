set -e
mkdir -p state-temp
# rm ./state-temp/*

assert4()
{
if [ "$@" = "4" ]; then
  # ok
  # elif [ "$@" = "action_2" ]; then
  echo
else
    echo "failed"
fi
}

# upgrade kubernetes
# brew install kubernetes-cli

initl1()
{
brew install minikube
minikube start --vm-driver=virtualbox

minikube status

minikube status|grep -ie "Running\|Configured"|wc -l >state-temp/temp1.tmp
cat state-temp/temp1.tmp | assert4
minikube stop

# kubectl is now configured to use "minikube"
# ⚠️  /usr/local/bin/kubectl is version 1.13.4, and is incompatible with Kubernetes 1.17.0. You will need to update /usr/local/bin/kubectl or use 'minikube kubectl' to connect with this cluster
}

echo "minikube start"
minikube start

