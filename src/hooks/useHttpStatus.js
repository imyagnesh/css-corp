import { useState, useCallback } from 'react';

const useHttpStatus = () => {
  const [httpStatus, setHttpStatus] = useState([]);

  const loadingStatus = useCallback(({ type, id = -1 }) => {
    setHttpStatus((currentStatus) => {
      const findIndexNo = currentStatus.findIndex(
        (item) => item.type === type && item.id === id,
      );
      const data = { type, status: 'REQUEST', id };

      if (findIndexNo === -1) {
        return [...currentStatus, data];
      }
      return [
        ...currentStatus.slice(0, findIndexNo),
        data,
        ...currentStatus.slice(findIndexNo + 1),
      ];
    });
  }, []);

  const successStatus = useCallback(({ type, id = -1 }) => {
    setHttpStatus((currentStatus) =>
      currentStatus.filter((item) => !(item.type === type && item.id === id)),
    );
  }, []);

  const errorStatus = useCallback(({ type, payload, id = -1 }) => {
    setHttpStatus((currentStatus) =>
      currentStatus.map((item) => {
        if (item.type === type && item.id === id) {
          return { ...item, status: 'FAIL', payload };
        }
        return item;
      }),
    );
  }, []);
  return {
    httpStatus,
    loadingStatus,
    successStatus,
    errorStatus,
  };
};

export default useHttpStatus;
