const React = require('react')
const Layout = require('./src/components/layout').default
const {GlobalStyles} = require('./src/styles')
const {Context} = require('./src/Context')

exports.wrapRootElement = ({element}) => {
    return(
        <Context>
            <GlobalStyles/>
            <Layout>
                {element}
            </Layout>
        </Context>
    )
}