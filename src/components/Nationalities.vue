<template> 
            <select id="country" name="country" class="nation-selector" v-model="nationality">
                <option class="nation-selector-option" value="Afghanistan">Afghanistan</option>
                <option class="nation-selector-option" value="Åland Islands">Åland Islands</option>
                <option class="nation-selector-option" value="Albania">Albania</option>
                <option class="nation-selector-option" value="Algeria">Algeria</option>
                <option class="nation-selector-option" value="American Samoa">American Samoa</option>
                <option class="nation-selector-option" value="Andorra">Andorra</option>
                <option class="nation-selector-option" value="Angola">Angola</option>
                <option class="nation-selector-option" value="Anguilla">Anguilla</option>
                <option class="nation-selector-option" value="Antarctica">Antarctica</option>
                <option class="nation-selector-option" value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option class="nation-selector-option" value="Argentina">Argentina</option>
                <option class="nation-selector-option" value="Armenia">Armenia</option>
                <option class="nation-selector-option" value="Aruba">Aruba</option>
                <option class="nation-selector-option" value="Australia">Australia</option>
                <option class="nation-selector-option" value="Austria">Austria</option>
                <option class="nation-selector-option" value="Azerbaijan">Azerbaijan</option>
                <option class="nation-selector-option" value="Bahamas">Bahamas</option>
                <option class="nation-selector-option" value="Bahrain">Bahrain</option>
                <option class="nation-selector-option" value="Bangladesh">Bangladesh</option>
                <option class="nation-selector-option" value="Barbados">Barbados</option>
                <option class="nation-selector-option" value="Belarus">Belarus</option>
                <option class="nation-selector-option" value="Belgium">Belgium</option>
                <option class="nation-selector-option" value="Belize">Belize</option>
                <option class="nation-selector-option" value="Benin">Benin</option>
                <option class="nation-selector-option" value="Bermuda">Bermuda</option>
                <option class="nation-selector-option" value="Bhutan">Bhutan</option>
                <option class="nation-selector-option" value="Bolivia">Bolivia</option>
                <option class="nation-selector-option" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option class="nation-selector-option" value="Botswana">Botswana</option>
                <option class="nation-selector-option" value="Bouvet Island">Bouvet Island</option>
                <option class="nation-selector-option" value="Brazil">Brazil</option>
                <option class="nation-selector-option" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option class="nation-selector-option" value="Brunei Darussalam">Brunei Darussalam</option>
                <option class="nation-selector-option" value="Bulgaria">Bulgaria</option>
                <option class="nation-selector-option" value="Burkina Faso">Burkina Faso</option>
                <option class="nation-selector-option" value="Burundi">Burundi</option>
                <option class="nation-selector-option" value="Cambodia">Cambodia</option>
                <option class="nation-selector-option" value="Cameroon">Cameroon</option>
                <option class="nation-selector-option" value="Canada">Canada</option>
                <option class="nation-selector-option" value="Cape Verde">Cape Verde</option>
                <option class="nation-selector-option" value="Cayman Islands">Cayman Islands</option>
                <option class="nation-selector-option" value="Central African Republic">Central African Republic</option>
                <option class="nation-selector-option" value="Chad">Chad</option>
                <option class="nation-selector-option" value="Chile">Chile</option>
                <option class="nation-selector-option" value="China">China</option>
                <option class="nation-selector-option" value="Christmas Island">Christmas Island</option>
                <option class="nation-selector-option" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option class="nation-selector-option" value="Colombia">Colombia</option>
                <option class="nation-selector-option" value="Comoros">Comoros</option>
                <option class="nation-selector-option" value="Congo">Congo</option>
                <option class="nation-selector-option" value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option class="nation-selector-option" value="Cook Islands">Cook Islands</option>
                <option class="nation-selector-option" value="Costa Rica">Costa Rica</option>
                <option class="nation-selector-option" value="Cote D'ivoire">Cote D'ivoire</option>
                <option class="nation-selector-option" value="Croatia">Croatia</option>
                <option class="nation-selector-option" value="Cuba">Cuba</option>
                <option class="nation-selector-option" value="Cyprus">Cyprus</option>
                <option class="nation-selector-option" value="Czech Republic">Czech Republic</option>
                <option class="nation-selector-option" value="Denmark">Denmark</option>
                <option class="nation-selector-option" value="Djibouti">Djibouti</option>
                <option class="nation-selector-option" value="Dominica">Dominica</option>
                <option class="nation-selector-option" value="Dominican Republic">Dominican Republic</option>
                <option class="nation-selector-option" value="Ecuador">Ecuador</option>
                <option class="nation-selector-option" value="Egypt">Egypt</option>
                <option class="nation-selector-option" value="El Salvador">El Salvador</option>
                <option class="nation-selector-option" value="Equatorial Guinea">Equatorial Guinea</option>
                <option class="nation-selector-option" value="Eritrea">Eritrea</option>
                <option class="nation-selector-option" value="Estonia">Estonia</option>
                <option class="nation-selector-option" value="Ethiopia">Ethiopia</option>
                <option class="nation-selector-option" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option class="nation-selector-option" value="Faroe Islands">Faroe Islands</option>
                <option class="nation-selector-option" value="Fiji">Fiji</option>
                <option class="nation-selector-option" value="Finland">Finland</option>
                <option class="nation-selector-option" value="France">France</option>
                <option class="nation-selector-option" value="French Guiana">French Guiana</option>
                <option class="nation-selector-option" value="French Polynesia">French Polynesia</option>
                <option class="nation-selector-option" value="French Southern Territories">French Southern Territories</option>
                <option class="nation-selector-option" value="Gabon">Gabon</option>
                <option class="nation-selector-option" value="Gambia">Gambia</option>
                <option class="nation-selector-option" value="Georgia">Georgia</option>
                <option class="nation-selector-option" value="Germany">Germany</option>
                <option class="nation-selector-option" value="Ghana">Ghana</option>
                <option class="nation-selector-option" value="Gibraltar">Gibraltar</option>
                <option class="nation-selector-option" value="Greece">Greece</option>
                <option class="nation-selector-option" value="Greenland">Greenland</option>
                <option class="nation-selector-option" value="Grenada">Grenada</option>
                <option class="nation-selector-option" value="Guadeloupe">Guadeloupe</option>
                <option class="nation-selector-option" value="Guam">Guam</option>
                <option class="nation-selector-option" value="Guatemala">Guatemala</option>
                <option class="nation-selector-option" value="Guernsey">Guernsey</option>
                <option class="nation-selector-option" value="Guinea">Guinea</option>
                <option class="nation-selector-option" value="Guinea-bissau">Guinea-bissau</option>
                <option class="nation-selector-option" value="Guyana">Guyana</option>
                <option class="nation-selector-option" value="Haiti">Haiti</option>
                <option class="nation-selector-option" value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option class="nation-selector-option" value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option class="nation-selector-option" value="Honduras">Honduras</option>
                <option class="nation-selector-option" value="Hong Kong">Hong Kong</option>
                <option class="nation-selector-option" value="Hungary">Hungary</option>
                <option class="nation-selector-option" value="Iceland">Iceland</option>
                <option class="nation-selector-option" value="India">India</option>
                <option class="nation-selector-option" value="Indonesia">Indonesia</option>
                <option class="nation-selector-option" value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option class="nation-selector-option" value="Iraq">Iraq</option>
                <option class="nation-selector-option" value="Ireland">Ireland</option>
                <option class="nation-selector-option" value="Isle of Man">Isle of Man</option>
                <option class="nation-selector-option" value="Israel">Israel</option>
                <option class="nation-selector-option" value="Italy">Italy</option>
                <option class="nation-selector-option" value="Jamaica">Jamaica</option>
                <option class="nation-selector-option" value="Japan">Japan</option>
                <option class="nation-selector-option" value="Jersey">Jersey</option>
                <option class="nation-selector-option" value="Jordan">Jordan</option>
                <option class="nation-selector-option" value="Kazakhstan">Kazakhstan</option>
                <option class="nation-selector-option" value="Kenya">Kenya</option>
                <option class="nation-selector-option" value="Kiribati">Kiribati</option>
                <option class="nation-selector-option" value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option class="nation-selector-option" value="Korea, Republic of">Korea, Republic of</option>
                <option class="nation-selector-option" value="Kuwait">Kuwait</option>
                <option class="nation-selector-option" value="Kyrgyzstan">Kyrgyzstan</option>
                <option class="nation-selector-option" value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option class="nation-selector-option" value="Latvia">Latvia</option>
                <option class="nation-selector-option" value="Lebanon">Lebanon</option>
                <option class="nation-selector-option" value="Lesotho">Lesotho</option>
                <option class="nation-selector-option" value="Liberia">Liberia</option>
                <option class="nation-selector-option" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option class="nation-selector-option" value="Liechtenstein">Liechtenstein</option>
                <option class="nation-selector-option" value="Lithuania">Lithuania</option>
                <option class="nation-selector-option" value="Luxembourg">Luxembourg</option>
                <option class="nation-selector-option" value="Macao">Macao</option>
                <option class="nation-selector-option" value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option class="nation-selector-option" value="Madagascar">Madagascar</option>
                <option class="nation-selector-option" value="Malawi">Malawi</option>
                <option class="nation-selector-option" value="Malaysia">Malaysia</option>
                <option class="nation-selector-option" value="Maldives">Maldives</option>
                <option class="nation-selector-option" value="Mali">Mali</option>
                <option class="nation-selector-option" value="Malta">Malta</option>
                <option class="nation-selector-option" value="Marshall Islands">Marshall Islands</option>
                <option class="nation-selector-option" value="Martinique">Martinique</option>
                <option class="nation-selector-option" value="Mauritania">Mauritania</option>
                <option class="nation-selector-option" value="Mauritius">Mauritius</option>
                <option class="nation-selector-option" value="Mayotte">Mayotte</option>
                <option class="nation-selector-option" value="Mexico">Mexico</option>
                <option class="nation-selector-option" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option class="nation-selector-option" value="Moldova, Republic of">Moldova, Republic of</option>
                <option class="nation-selector-option" value="Monaco">Monaco</option>
                <option class="nation-selector-option" value="Mongolia">Mongolia</option>
                <option class="nation-selector-option" value="Montenegro">Montenegro</option>
                <option class="nation-selector-option" value="Montserrat">Montserrat</option>
                <option class="nation-selector-option" value="Morocco">Morocco</option>
                <option class="nation-selector-option" value="Mozambique">Mozambique</option>
                <option class="nation-selector-option" value="Myanmar">Myanmar</option>
                <option class="nation-selector-option" value="Namibia">Namibia</option>
                <option class="nation-selector-option" value="Nauru">Nauru</option>
                <option class="nation-selector-option" value="Nepal">Nepal</option>
                <option class="nation-selector-option" value="Netherlands">Netherlands</option>
                <option class="nation-selector-option" value="Netherlands Antilles">Netherlands Antilles</option>
                <option class="nation-selector-option" value="New Caledonia">New Caledonia</option>
                <option class="nation-selector-option" value="New Zealand">New Zealand</option>
                <option class="nation-selector-option" value="Nicaragua">Nicaragua</option>
                <option class="nation-selector-option" value="Niger">Niger</option>
                <option class="nation-selector-option" value="Nigeria">Nigeria</option>
                <option class="nation-selector-option" value="Niue">Niue</option>
                <option class="nation-selector-option" value="Norfolk Island">Norfolk Island</option>
                <option class="nation-selector-option" value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option class="nation-selector-option" value="Norway">Norway</option>
                <option class="nation-selector-option" value="Oman">Oman</option>
                <option class="nation-selector-option" value="Pakistan">Pakistan</option>
                <option class="nation-selector-option" value="Palau">Palau</option>
                <option class="nation-selector-option" value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option class="nation-selector-option" value="Panama">Panama</option>
                <option class="nation-selector-option" value="Papua New Guinea">Papua New Guinea</option>
                <option class="nation-selector-option" value="Paraguay">Paraguay</option>
                <option class="nation-selector-option" value="Peru">Peru</option>
                <option class="nation-selector-option" value="Philippines">Philippines</option>
                <option class="nation-selector-option" value="Pitcairn">Pitcairn</option>
                <option class="nation-selector-option" value="Poland">Poland</option>
                <option class="nation-selector-option" value="Portugal">Portugal</option>
                <option class="nation-selector-option" value="Puerto Rico">Puerto Rico</option>
                <option class="nation-selector-option" value="Qatar">Qatar</option>
                <option class="nation-selector-option" value="Reunion">Reunion</option>
                <option class="nation-selector-option" value="Romania">Romania</option>
                <option class="nation-selector-option" value="Russian Federation">Russian Federation</option>
                <option class="nation-selector-option" value="Rwanda">Rwanda</option>
                <option class="nation-selector-option" value="Saint Helena">Saint Helena</option>
                <option class="nation-selector-option" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option class="nation-selector-option" value="Saint Lucia">Saint Lucia</option>
                <option class="nation-selector-option" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option class="nation-selector-option" value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option class="nation-selector-option" value="Samoa">Samoa</option>
                <option class="nation-selector-option" value="San Marino">San Marino</option>
                <option class="nation-selector-option" value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option class="nation-selector-option" value="Saudi Arabia">Saudi Arabia</option>
                <option class="nation-selector-option" value="Senegal">Senegal</option>
                <option class="nation-selector-option" value="Serbia">Serbia</option>
                <option class="nation-selector-option" value="Seychelles">Seychelles</option>
                <option class="nation-selector-option" value="Sierra Leone">Sierra Leone</option>
                <option class="nation-selector-option" value="Singapore">Singapore</option>
                <option class="nation-selector-option" value="Slovakia">Slovakia</option>
                <option class="nation-selector-option" value="Slovenia">Slovenia</option>
                <option class="nation-selector-option" value="Solomon Islands">Solomon Islands</option>
                <option class="nation-selector-option" value="Somalia">Somalia</option>
                <option class="nation-selector-option" value="South Africa">South Africa</option>
                <option class="nation-selector-option" value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option class="nation-selector-option" value="Spain">Spain</option>
                <option class="nation-selector-option" value="Sri Lanka">Sri Lanka</option>
                <option class="nation-selector-option" value="Sudan">Sudan</option>
                <option class="nation-selector-option" value="Suriname">Suriname</option>
                <option class="nation-selector-option" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option class="nation-selector-option" value="Swaziland">Swaziland</option>
                <option class="nation-selector-option" value="Sweden">Sweden</option>
                <option class="nation-selector-option" value="Switzerland">Switzerland</option>
                <option class="nation-selector-option" value="Syria">Syria</option>
                <option class="nation-selector-option" value="Taiwan">Taiwan</option>
                <option class="nation-selector-option" value="Tajikistan">Tajikistan</option>
                <option class="nation-selector-option" value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option class="nation-selector-option" value="Thailand">Thailand</option>
                <option class="nation-selector-option" value="Timor-leste">Timor-leste</option>
                <option class="nation-selector-option" value="Togo">Togo</option>
                <option class="nation-selector-option" value="Tokelau">Tokelau</option>
                <option class="nation-selector-option" value="Tonga">Tonga</option>
                <option class="nation-selector-option" value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option class="nation-selector-option" value="Tunisia">Tunisia</option>
                <option class="nation-selector-option" value="Turkey">Turkey</option>
                <option class="nation-selector-option" value="Turkmenistan">Turkmenistan</option>
                <option class="nation-selector-option" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option class="nation-selector-option" value="Tuvalu">Tuvalu</option>
                <option class="nation-selector-option" value="Uganda">Uganda</option>
                <option class="nation-selector-option" value="Ukraine">Ukraine</option>
                <option class="nation-selector-option" value="United Arab Emirates">United Arab Emirates</option>
                <option class="nation-selector-option" value="United Kingdom">United Kingdom</option>
                <option class="nation-selector-option" value="United States">United States</option>
                <option class="nation-selector-option" value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option class="nation-selector-option" value="Uruguay">Uruguay</option>
                <option class="nation-selector-option" value="Uzbekistan">Uzbekistan</option>
                <option class="nation-selector-option" value="Vanuatu">Vanuatu</option>
                <option class="nation-selector-option" value="Venezuela">Venezuela</option>
                <option class="nation-selector-option" value="Viet Nam">Viet Nam</option>
                <option class="nation-selector-option" value="Virgin Islands, British">Virgin Islands, British</option>
                <option class="nation-selector-option" value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option class="nation-selector-option" value="Wallis and Futuna">Wallis and Futuna</option>
                <option class="nation-selector-option" value="Western Sahara">Western Sahara</option>
                <option class="nation-selector-option" value="Yemen">Yemen</option>
                <option class="nation-selector-option" value="Zambia">Zambia</option>
                <option class="nation-selector-option" value="Zimbabwe">Zimbabwe</option>
            </select>
</template>


<script>


export default {
  name: 'Nationalities',
  
  components: {
      

  },
    data(){
    return{
      nationality:''
    }
  },
  mounted(){
  },
  methods:{


  },
  watch:{
    nationality:function(){this.$emit('getNationality',this.nationality)}
  }
}
</script>