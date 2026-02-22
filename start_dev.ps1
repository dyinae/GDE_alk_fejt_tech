kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

Write-Host "Waiting for ArgoCD deployments..."

kubectl wait --for=condition=available deployment/argocd-server -n argocd --timeout=180s
kubectl wait --for=condition=available deployment/argocd-repo-server -n argocd --timeout=180s
kubectl wait --for=condition=available deployment/argocd-application-controller -n argocd --timeout=180s
kubectl wait --for=condition=available deployment/argocd-redis -n argocd --timeout=180s

Write-Host "ArgoCD ready. Deploying root app..."

kubectl apply -f root-app.yaml -n argocd