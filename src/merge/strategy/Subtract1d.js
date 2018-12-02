/**
 * @author syt123450 / https://github.com/syt123450
 */

import { StableMerge1d } from "../abstract/StableMerge1d";

/**
 * Subtract1d, can be initialized by StrategyFactory directly.
 * MergeStrategy for MergedLayer when apply Subtract operation to 1d TensorSpace layers.
 *
 * For example:
 * ```javascript
 * let dense1 = new TSP.layers.Dense({ ...config });
 * let dense2 = new TSP.layers.Dense({ ...config });
 * let subtractLayer = TSP.layers.Subtract([ dense1, dense2 ], { ...config });
 * ```
 * In this example, the merged layer "subtractLayer" apply merge strategy "Subtract1d".
 *
 * @param mergedElements, array of TensorSpace layers. (layerList.length > 0)
 * @constructor
 */

function Subtract1d( mergedElements ) {

	// Subtract1d inherits from abstract strategy "StableMerge1d".
	
	StableMerge1d.call( this, mergedElements );

	this.strategyType = "Subtract1d";

}

Subtract1d.prototype = Object.assign( Object.create( StableMerge1d.prototype ) );

export { Subtract1d };