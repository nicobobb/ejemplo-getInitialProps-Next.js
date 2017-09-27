import React from 'react';

class Post extends React.Component {
    static async getInitialProps({pathname, query, req, xhr}) {
        
        return {            
            page: pathname,
            v: query.v
        }
    }

    render() {
        return (
            <section>
                Estás en la página: {this.props.page}
                <p>Buscar la key: {this.props.v}</p>                
            </section>
        );
    }
}

export default Post;