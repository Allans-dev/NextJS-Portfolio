/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const url = decodeURI(req.query.url);
  const result = await fetch(url);
  const body = await result.body;
  body.pipe(res);
};
