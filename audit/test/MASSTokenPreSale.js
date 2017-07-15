var mtpsOutput={"contracts":{"MASSTokenPreSale.sol:MASSTokenPreSale":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokenExchangeRate\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"presaleStartBlock\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"presaleEndBlock\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isEnded\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"massEthFund\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokenCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"endPreSale\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[{\"name\":\"_massEthFund\",\"type\":\"address\"},{\"name\":\"_presaleStartBlock\",\"type\":\"uint256\"},{\"name\":\"_presaleEndBlock\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"CreatePreSale\",\"type\":\"event\"}]","bin":"60606040526002805460ff19169055341561001657fe5b6040516060806105418339810160409081528151602083015191909201515b60038054600160a060020a031916600160a060020a038581169190911791829055600484905560058390556002805461010060a860020a0319166101009390921692909202179055600080555b5050505b6104ac806100956000396000f300606060405236156100ac5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd8114610197578063313ce567146101b95780634172d080146101db5780634cb79536146101fd57806370a082311461021f57806375ac3b081461024d578063a4fd6f561461026f578063ce606ee014610293578063d1759141146102bf578063dd54291b146102eb578063ee889ed01461030d575b6101955b600254600090819060ff16156100c65760006000fd5b6004544310156100d65760006000fd5b6005544311156100e65760006000fd5b3415156100f35760006000fd5b6101053461051463ffffffff61031f16565b60005490925061011b908363ffffffff61034e16565b90506a0ac0db698068112d000000819010156101375760006000fd5b6000818155600160a060020a033316808252600160209081526040928390208054860190558251858152925191927f1c560f688b556ab7790fb36f75866c640579a8fa856e89bc2d260ab5024ba2c1929081900390910190a25b5050565b005b341561019f57fe5b6101a7610368565b60408051918252519081900360200190f35b34156101c157fe5b6101a761036e565b60408051918252519081900360200190f35b34156101e357fe5b6101a7610373565b60408051918252519081900360200190f35b341561020557fe5b6101a7610379565b60408051918252519081900360200190f35b341561022757fe5b6101a7600160a060020a036004351661037f565b60408051918252519081900360200190f35b341561025557fe5b6101a761039e565b60408051918252519081900360200190f35b341561027757fe5b61027f6103a4565b604080519115158252519081900360200190f35b341561029b57fe5b6102a36103ad565b60408051600160a060020a039092168252519081900360200190f35b34156102c757fe5b6102a36103c1565b60408051600160a060020a039092168252519081900360200190f35b34156102f357fe5b6101a76103d0565b60408051918252519081900360200190f35b341561031557fe5b6101956103df565b005b600082820283158061033b575082848281151561033857fe5b04145b151561034357fe5b8091505b5092915050565b60008282018381101561034357fe5b8091505b5092915050565b60005481565b601281565b61051481565b60045481565b600160a060020a0381166000908152600160205260409020545b919050565b60055481565b60025460ff1681565b6002546101009004600160a060020a031681565b600354600160a060020a031681565b6a0ac0db698068112d00000081565b60025433600160a060020a0390811661010090920416146104005760006000fd5b60025460ff16156104115760006000fd5b6005544310801561042f57506000546a0ac0db698068112d00000014155b1561043a5760006000fd5b6002805460ff19166001179055600354604051600160a060020a039182169130163180156108fc02916000818181858888f19350505050151561047d5760006000fd5b5b5600a165627a7a72305820484a74cdaed62a2223017f0c2f14a4082fc63508bb9bbac11296f2f913c2d6c40029"},"PreSaleToken.sol:PreSaleToken":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"}]","bin":"6060604052341561000c57fe5b5b60f88061001b6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd8114604357806370a08231146062575bfe5b3415604a57fe5b6050609a565b60408051918252519081900360200190f35b3415606957fe5b605073ffffffffffffffffffffffffffffffffffffffff6004351660a0565b60408051918252519081900360200190f35b60005481565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260409020545b9190505600a165627a7a72305820bc3b6fc7c48a2a3ff902ecd5332b0700f577a052b5141cddfa06c2bdc1aeadf10029"},"PreSaleToken.sol:Token":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"}]","bin":""},"SafeMath.sol:SafeMath":{"abi":"[]","bin":"60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00a165627a7a7230582043f02edc3e6481777285e2e2df6b5fcc1f5db6ab0d10eb6cfb2cc83cb3c342fb0029"}},"version":"0.4.11+commit.68ef5810.Darwin.appleclang"};