import {Injectable, EventEmitter} from "angular2/core";
import {User} from "./user.interface";
declare var Firebase: any;

@Injectable()
export class AuthService {
	private _userLoggedOut = new EventEmitter();

	signupUser(user: User){
		const firebaseRef = new Firebase('https://brilliant-fire-4014.firebaseio.com');
		firebaseRef.createUser({
			email: user.email,
			password: user.password
		}, function(error, userData){
			if (error){
				console.error(error);
			} else {
				console.log('Successfully create user: ' + userData.uid);
			}
		});
	}
	signinUser(user: User){
		const firebaseRef = new Firebase('https://brilliant-fire-4014.firebaseio.com');
		firebaseRef.authWithPassword({
			email: user.email,
			password: user.password
		}, function(error, authData){
			if (error){
				console.error(error);
			} else {
				localStorage.setItem('myToken', authData.token);
				console.log(authData);
			}
		});
	}

	logout(){
		localStorage.removeItem('myToken');
		this._userLoggedOut.emit(null);
	}

	getLoggedOutEvent(): EventEmitter<any> {
		return this._userLoggedOut;
	}

	isAuthenticated(): boolean{
		return localStorage.getItem('myToken') !== null;
	}
}