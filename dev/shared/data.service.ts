import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
	constructor(private _http: Http){

	}

	getAllData(): Observable<any> {
		const token = localStorage.getItem('myToken') !== null ? '?auth=' + localStorage.getItem('myToken') : '';
		return this._http.get('https://brilliant-fire-4014.firebaseio.com/users/data.json' + token)
			.map(response => response.json());
	}

	addData(data:any): Observable<any>{
		const body = JSON.stringify(data);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const token = localStorage.getItem('myToken') !== null ? '?auth=' + localStorage.getItem('myToken') : '';
		return this._http.post('https://brilliant-fire-4014.firebaseio.com/users/data.json' + token, body, {headers: headers})
			.map(response => response.json());
	}

	deleteAllData(): Observable<any>{
		const token = localStorage.getItem('myToken') !== null ? '?auth=' + localStorage.getItem('myToken') : '';
		return this._http.delete('https://brilliant-fire-4014.firebaseio.com/users/data.json' + token)
			.map(response => response.json());
	}
}