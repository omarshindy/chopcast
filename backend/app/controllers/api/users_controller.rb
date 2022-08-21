class Api::UsersController < ApplicationController
    def get
        user = User.where("user_id != 1" )
        render json: user
    end
end