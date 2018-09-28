export interface Person {
	/**
     * @minLength 5
     */
	firstName: string,
	/**
     * @minLength 5
     */
	lastName: string,
	/**
     * @minimum 10
     */
	age: number,
	/**
	 * @pattern [^]*(gmail.com)$
	 */
	email: string,
	/**
	 * @minItems 3
	 * @maxItems 3
	 * @uniqueItems true
	 */
	interests: string[],
	address: {
		/**
		 * @maxLength 25
		 */
		country: string,
		/**
		 * @minLength 3
		 */
		city: string,
		/**
		 * @pattern (\d{3,})
		 */
		zipCode: string,
	},
} 