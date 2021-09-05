import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAuctioner } from 'app/slices';
import { selectAuctioner } from 'app/selectors';


export const AuctionForms = () => {
  const [auctioner, setAuctioner] = useState()
  const [auctionDescription, setAuctionDescription] = useState()
  const singletonAuctioner = useSelector(state => selectAuctioner(state, 1));
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    return dispatch(createAuctioner({address: auctioner}))
  }

  const onSubmitAuction = (e) => {
    return dispatch(
      createAuction(
        {
          address: auctioner,
          isClosed: false,
          balance: 0,
          auctionerId: singletonAuctioner.id
        }
      )
    )
  }

  const handleChange = (e) => {
    setAuctioner(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setAuctionDescription(e.target.value)
  }

  console.log(singletonAuctioner)
  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      {!singletonAuctioner ?
        <div>
          <h4>Auctioner</h4>
          <input type="text" id="auctioner_name" onChange={handleChange} />
          <button type="submit" onClick={onSubmit}>Submit</button>
        </div>
      : (
        <div>
          <p>{singletonAuctioner.address}, Let's do other things</p>
          <h4>Create Auction</h4>
          <input type="text" id="description" onChange={handleDescriptionChange} />
          <button type="submit" onClick={onSubmitAuction}>Submit</button>
        </div>
      )}
    </div>
  )
};
