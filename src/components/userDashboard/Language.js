import UserDashboardLayout from '../../layout/UserDashboardLayout';


const Language = () => {
    return (
       <UserDashboardLayout>
         <div class="p-6 max-w-[1076px] h-full lg:h-[650px] bg-white rounded-2xl shadow-md">
                  <div class="space-y-4">
                    <div>
                      <h2 class="font-poppins font-semibold text-base leading-6 text-[#637381]">Which language should use?</h2>
                    </div>
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55]" id="English" name="language" value="English" />
                      <label for="English" class="pl-1">English</label>
                    </div>
  
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55]" id="deutsch" name="language" value="Deutsch" />
                      <label for="deutsch" class="pl-1">Deutsch</label>
                    </div>
  
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55]" id="Italiano" name="language" value="Italiano" />
                      <label for="Italiano" class="pl-1">Italiano</label>
                    </div>
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55]" id="Bahasa" name="language" value="Bahasa" />
                      <label for="Bahasa" class="pl-1">Bahasa Indonesia</label>
                    </div>
  
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55]" id="polski" name="language" value="polski" />
                      <label for="polski" class="pl-1">Polski</label>
                    </div>
                    <div class="font-poppins text-sm leading-[22px] text-primary">
                      <input type="radio" class="accent-[#00AB55] pr-3" id="francais" name="language"
                        value="francais" />
                      <label for="francais" class="pl-1">Francais</label>
                    </div>
                    <div class="flex justify-end pt-4">
                      <button
                        class="bg-success py-2 px-6 rounded-md font-poppins font-semibold text-sm leading-[21px] text-white"
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