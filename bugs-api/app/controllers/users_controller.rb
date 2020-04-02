class UsersController < ApplicationController
     # GET /users
  def index
    @users = User.all
    json_response(@users)
  end
     
  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)


  end
     
  # GET /users/:id
  def show
    json_response(@user)
  end
     
  # PUT /users/:id
  def update
    user = User.find(params[:id])
    user.update(user_params)
    head :no_content
  end
     
  # DELETE /users/:id
  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end
     
  private
     
  def user_params
    # whitelist params
    params.permit(:fname, :lname, :email)
  end
     
  def set_user
    @user = User.find(params[:id])
  end
end 
