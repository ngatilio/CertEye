sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.pkg.kraftkit.sh/gpg.key | \
  sudo gpg --dearmor -o /etc/apt/keyrings/unikraft.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/unikraft.gpg] https://deb.pkg.kraftkit.sh \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/unikraft.list > /dev/null

sudo apt-get update
sudo apt-get install kraftkit