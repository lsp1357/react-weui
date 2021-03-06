/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Label} = WeUI;

describe('<Label></Label>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Label className=${clazz}></Label>`, ()=> {
            const wrapper = shallow(
                <Label className={clazz}/>
            );

            it(`should render <Label></Label> component`, ()=> {
                assert(wrapper.instance() instanceof Label);
            });

            it(`should render Label label component with weui_label class`, ()=> {
                assert(wrapper.find('label').hasClass('weui_label'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('label').hasClass(clazz));
                }
            });
        });
    });
});