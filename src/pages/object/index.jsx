import React from 'react'
import ObjectComponents from '../../component/object/components'
import Select from '../../component/select'
import ObjectContact from '../../component/object/contact'
import ObjectMain from '../../component/object/main'

const ObjectPages = () => {
    return (
        <>
            <Select />
            <ObjectMain />
            <ObjectComponents />
            <ObjectContact />
        </>
    )
}

export default ObjectPages