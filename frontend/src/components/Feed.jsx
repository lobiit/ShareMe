import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';

function Feed() {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);

      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) {
    return <Spinner message="We are adding new ideas to your feed!" />;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
}
export default Feed;
