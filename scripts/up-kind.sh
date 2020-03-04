set -ex

# "only" linux
# bstate only linux
node statebash/only.js linux


# from https://kind.sigs.k8s.io/docs/user/quick-start
curl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.6.1/kind-$(uname)-amd64
chmod +x ./kind
mkdir -p ~/k-in-d
mv ./kind ~/k-in-d/kind

# save state
# check state (read state and check)

# NEXT STATE:
# check state

# base on https://kind.sigs.k8s.io/docs/user/quick-start
~/k-in-d/kind create cluster

