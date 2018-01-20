import fetchJSONP from 'fetch-jsonp';

export function getMeetupEvents() {
  const MEETUP_API_URL = '//api.meetup.com/CodeYQL/events\?\&sign\=true\&photo-ho<200c><200b>st\=public\&page\=20\&st<200c><200b>atus\=past,upcoming';
  
  return fetchJSONP(window.location.protocol + MEETUP_API_URL)
    .then(res => res.json())
    .then(res => res.data);
}
