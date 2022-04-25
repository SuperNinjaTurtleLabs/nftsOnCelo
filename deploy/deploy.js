module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(deployer);
    await deploy('HelloNft', {
        from: deployer,
        log: true,
    });
};
module.exports.tags = ['HelloNft'];