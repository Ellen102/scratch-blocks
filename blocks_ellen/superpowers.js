/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.superpowers');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['superpowers_jump'] = {
  /**
   * Block to jump.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "jump %1 times %2 steps",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        }
      ],
      "category": Blockly.Categories.superpowers,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};



Blockly.Blocks['superpowers_fly_away'] = {
		  /**
		   * Block to jump.
		   * @this Blockly.Block
		   */
		  init: function() {
		    this.jsonInit({
		      "message0": "fly away with speed %1",
		      "args0": [
		        {
		          "type": "input_value",
		          "name": "SPEED"
		        }
		      ],
		      "category": Blockly.Categories.superpowers,
		      "extensions": ["colours_motion", "shape_end"]
		    });
		  }
		};


Blockly.Blocks['superpowers_bat_signal'] = {
		  /**
		   * Block to jump.
		   * @this Blockly.Block
		   */
		  init: function() {
		    this.jsonInit({
		      "message0": "when bat-signal is received",
		      "args0": [

		      ],
		      "category": Blockly.Categories.superpowers,
		      "extensions": ["colours_event", "shape_hat"]
		    });
		  }
		};



Blockly.Blocks['superpowers_while_awesome'] = {
		  /**
		   * Block for repeat until a condition becomes true.
		   */
		  init: function() {
		    this.jsonInit({
		      "message0": "while I am awesome",
		      "message1": "%1",
		      "lastDummyAlign2": "RIGHT",
		      "args1": [
		        {
		          "type": "input_statement",
		          "name": "SUBSTACK"
		        }
		      ],
		      "category": Blockly.Categories.control,
		      "extensions": ["colours_control", "shape_end"]
		    });
		  }
		};