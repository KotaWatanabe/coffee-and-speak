class PaymentsController < ApplicationController
    def new
        @teacher = Teacher.find params[:teacher_id]
        @payment = Payment.new
      end
    
      def create
        @teacher = Teacher.find params[:teacher_id]
        @payment = Payment.new  amount: params[:gift][:amount],
                          sender: current_user,
                          receiver: @teacher
        if @gift.save
          redirect_to new_gift_payment_path(@gift), notice: 'Please make a payment'
        else
          render :new
        end
      end
end
