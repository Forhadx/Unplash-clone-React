import React, { useEffect } from 'react'
import * as actions from '../store/actions/index';

import Gallary from '../components/gallary/gallary';
import { connect } from 'react-redux';

const Home = props =>{
    const { onFetchPaginationPhotos } = props;
    useEffect(()=>{
        onFetchPaginationPhotos();
    }, [onFetchPaginationPhotos])

    console.log('pag: ', props.photos)

    return(
        <div>
            <div>
                <img className="cover-pic" style={{height: '70vh', width: '100%' , opacity: '.8'}} src="https://images.unsplash.com/photo-1617191979724-f755c6d83e01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="cover pic" />
            </div>
            <Gallary photos={props.photos} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      photos: state.pagination.photos
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
        onFetchPaginationPhotos: () => dispatch(actions.fetchPaginationPhotos(21))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);