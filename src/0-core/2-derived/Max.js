import { Measure } from '../0-base' ;
import { Monoids } from '../../1-api/0-Monoids' ;

export class Max extends Measure {

	constructor ( ) {
		super( Monoids.INTEGER_MAX ) ;
	}

	measure ( element ) {
		return element ;
	}

}
