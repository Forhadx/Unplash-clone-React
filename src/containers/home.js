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
            <div>cover</div>
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