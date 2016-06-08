class DevicesController < ApplicationController

  def create
    @device = Device.find_by(code: params[:code])
    if @device
      @exist_users = User.where(device_id: @device.id)
      if @exist_users.length
        house_id = []
        @exist_users.each do |user|
          if user.house_id != nil
            house_id << user.house_id
          end
        end
        if house_id.length > 0
          @house_user = User.find_by(house_id: house_id[0])
        end
        if @house_user
          @exist_house = House.find(house_id[0])
        end
      end
    end

  if @device && @exist_users && @exist_house
      @found = "#{@house_user.username} with the same device is part of #{@exist_house.name}, would you like to join?"
      @id = @exist_house.id
      current_user.device_id = @device.id
      current_user.save
      render json: { found: @found, id: @id }
    else
      @new_device = Device.create(code: params[:code])
      current_user.device_id = @new_device.id
      current_user.save
    end
  end

  private
    def device_params
      params.permit(:code)
    end
end
