import UserDashboardLayout from '../../layout/UserDashboardLayout';


const Language = () => {
    return (
       <UserDashboardLayout>
         <div className="p-6 max-w-[1076px] h-full lg:h-[650px] bg-white rounded-2xl shadow-md">
                  <div className="space-y-3 lg:space-y-4">
                    <div>
                      <h2 className="font-poppins font-semibold text-base leading-6 text-[#637381]">Which language should use?</h2>
                    </div>

                    
                    <div className="flex items-center space-x-1">
                      <input
                      type="radio"
                      id="english"
                      name="fav_language"
                      className="accent-[#00AB55]"
                      value="english"
                     
                    />
                    <label for="english"  className="text-[#212B36] text-sm font-poppins">English</label> <br />
                     </div>

                      <div className="flex items-center space-x-1">
                        <input
                        type="radio"
                        id="Deutsch"
                        name="fav_language"
                        className="accent-[#00AB55]"
                        value="Deutsch"
                       
                      />
                      <label for="Deutsch" className="text-[#212B36] text-sm font-poppins">Deutsch</label> <br />
                      </div>
          
                      <div className="flex items-center space-x-1">
                        <input
                        type="radio"
                        id="italiano"
                        name="fav_language"
                        className="accent-[#00AB55]"
                        value="Italiano"
                      />
                      <label for="italiano" className="text-[#212B36] text-sm font-poppins">Italiano</label><br />
                      </div>

                     <div className="flex items-center space-x-1">
                      <input
                      type="radio"
                      id="bahasa"
                      name="fav_language"
                      className="accent-[#00AB55]"
                      value="Bahasa Indonesia"
                    />
                    <label for="bahasa" className="text-[#212B36] text-sm font-poppins">Bahasa Indonesia</label><br />
                     </div>

                    <div className="flex items-center space-x-1">
                      <input
                      type="radio"
                      id="Polski"
                      name="fav_language"
                      className="accent-[#00AB55]"
                      value="Polski"
                    />
                    <label for="Polski" className="text-[#212B36] text-sm font-poppins">Polski</label><br />
                    </div>

                     <div className="flex items-center space-x-1">
                      <input
                      type="radio"
                      id="Francais"
                      name="fav_language"
                      className="accent-[#00AB55]"
                      value="Francais"
                    />
                    <label for="Francais" className="text-[#212B36] text-sm font-poppins">Francais</label><br />
                     </div>





{/*                     
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55]" id="English" name="language" value="English" />
                      <label for="English" className="pl-1">Englishhhhhh</label>  <br />
                    </div>
  
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55]" id="deutsch" name="language" value="Deutsch" />
                      <label for="deutsch" className="pl-1">Deutsch</label>
                    </div>
  
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55]" id="Italiano" name="language" value="Italiano" />
                      <label for="Italiano" className="pl-1">Italiano</label>
                    </div>
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55]" id="Bahasa" name="language" value="Bahasa" />
                      <label for="Bahasa" className="pl-1">Bahasa Indonesia</label>
                    </div>
  
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55]" id="polski" name="language" value="polski" />
                      <label for="polski" className="pl-1">Polski</label>
                    </div>
                    <div className="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" className="accent-[#00AB55] pr-3" id="francais" name="language"
                        value="francais" />
                      <label for="francais" className="pl-1">Francais</label>
                    </div> */}



                    <div className="flex justify-end pt-4">
                      <button
                        className="bg-success py-2 px-6 rounded-md font-poppins font-semibold text-sm leading-[21px] text-white"
                        type="">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
       </UserDashboardLayout>
    );
};

export default Language;