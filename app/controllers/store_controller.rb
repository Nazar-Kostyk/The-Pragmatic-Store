class StoreController < ApplicationController
  include CurrentCart
  skip_before_action :authorize
  before_action :set_cart
  
  def index
    if session[:counter].nil?
      session[:counter] = 1
    else
      session[:counter] += 1
    end
    @counter = session[:counter]
    @products = Product.all.order(:title)
  end
end
