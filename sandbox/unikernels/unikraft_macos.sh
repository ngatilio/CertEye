git clone https://github.com/unikraft/kraftkit && git checkout tags/RELEASE-0.17.0
tar -xvf kraftkit_0.17.0_darwin_arm64.tar.gz
brew install gnu-sed make coreutils m4 gawk grep wget qemu socat
# ...for compiling x86_64 Unikernels (needed for KraftCloud)
brew install x86_64-elf-binutils x86_64-elf-gcc
# ...for compiling aarch-64 Unikernels
brew install aarch64-elf-binutils aarch64-elf-gcc