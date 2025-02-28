import axios from "axios";

const baseUrl='https://streaming-availability.p.rapidapi.com'

export const customFetch=axios.create({
    baseURL:baseUrl,
    headers: {
        'x-rapidapi-key': 'a1444b0cf3msh643bdef9895ca92p104823jsn9cd4ad80c861',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
})
export const  regFirstWords =(s, n)=>{
  // ?: non-capturing subsequent sp+word.Change {} if you want to require n instead of allowing fewer
  var a = s.match(new RegExp('[\\w\\.]+' + '(?:[\\s-]*[\\w\\.]+){0,' + (n - 1) + '}'));
  return  (a === undefined || a === null) ? '' : a[0];
}