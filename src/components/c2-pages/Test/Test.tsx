import React from 'react';
import s from './Test.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../c1-common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../../c1-common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperSelect from '../../c1-common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../../c1-common/c6-SuperRadio/SuperRadio';
import SuperRange from '../../c1-common/c7-SuperRange/SuperRange';
import {ShowComponent} from '../../ShowComponent/ShowComponent';
import {SuperNavLink} from '../../c1-common/c91-SuperNavLink/SuperNavLink';

const arr = ['Super', 'Select', 'SuperSelect']

export function Test() {
    // const [value, onChangeOption] = useState(arr[2])
    // const [value1Range, setValue1Range] = useState(25)

    return (
        <div>
            <h1>Test</h1>

            <div className={s.main}>
                <ShowComponent name={'SuperInputText'} node={
                    <SuperInputText
                        value={'SuperInputText'}
                        // onChangeText={setText}
                        // onEnter={showAlert}
                        // error={error}
                        // spanClassName={s.testSpanError}
                    />
                }/>

                <ShowComponent name={'SuperButton'} node={
                    <SuperButton>
                        SuperButton
                    </SuperButton>
                }/>

                <ShowComponent name={'SuperCheckbox'} node={
                    <SuperCheckbox
                        // checked={checked}
                        // onChangeChecked={setChecked}
                    >
                        SuperCheckbox
                    </SuperCheckbox>
                }/>

                <ShowComponent name={'SuperEditableSpan'} node={
                    <SuperEditableSpan
                        value={'SuperEditableSpan'}
                        // onChangeText={setValue}
                        // spanProps={{children: value ? undefined : 'enter text...'}}
                        //
                        // test props
                        // onEnter={() => alert('Hello, onEnter!')}
                        // onBlur={() => alert('Hello, onBlur!')}
                        // spanClassName={'spanParameter'}
                    />
                }/>

                <ShowComponent name={'SuperSelect'} node={
                    <SuperSelect
                        value={'SuperSelect'}
                        options={arr}
                        // onChangeOption={onChangeOption}
                        // onChange={() => alert('This is SELECT onChange')}
                    />
                }/>

                <ShowComponent name={'SuperRadio'} node={
                    <SuperRadio
                        options={arr}
                        value={arr[2]}
                        // value={value}
                        // name={'radio'}
                        // onChangeOption={onChangeOption}
                        // onChange={() => alert('This is RADIO onChange')}
                    />
                }/>


                <ShowComponent name={'SuperRange'} node={
                    <SuperRange
                        value={25}
                        // value={value1Range}
                        // onChangeRange={setStartRange}
                    />
                }/>

                {/*<SuperDoubleRange/>*/}

                <ShowComponent name={'SuperNavLink'} node={
                    <SuperNavLink
                        goTo={'/test'}
                        text={'Go to Test page'}
                    />
                }/>

            </div>
        </div>
    )
}