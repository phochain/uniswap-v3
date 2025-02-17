// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IPhoswapV3PoolImmutables.sol';
import './pool/IPhoswapV3PoolState.sol';
import './pool/IPhoswapV3PoolDerivedState.sol';
import './pool/IPhoswapV3PoolActions.sol';
import './pool/IPhoswapV3PoolOwnerActions.sol';
import './pool/IPhoswapV3PoolEvents.sol';

/// @title The interface for a Phoswap V3 Pool
/// @notice A Phoswap pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IPhoswapV3Pool is
    IPhoswapV3PoolImmutables,
    IPhoswapV3PoolState,
    IPhoswapV3PoolDerivedState,
    IPhoswapV3PoolActions,
    IPhoswapV3PoolOwnerActions,
    IPhoswapV3PoolEvents
{

}
