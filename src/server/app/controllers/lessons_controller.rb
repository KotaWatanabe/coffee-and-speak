class LessonsController < ApplicationController

    def create
        @lesson = Lesson.new lesson_params
        @user = current_user
        @teacher = Teacher.find params[:teacher_id]
         if @lesson.save
            flash[:success] = "Registration successful!"
            redirect_to dashboard_user_path(@user)
            # redirect_to root_path
        else
            render :root_path
        end
    end

    def edit
    end
  
    def update
    #   if @lesson.update user_params
    #     flash[:success] = "Your profile was updated successfully!"
    #     redirect_to root_path
    #   else
    #     render :edit
    #   end

    end

    private
    def lesson_params
        params.require(:lesson).permit(:comment,:aasm_state)
    end
end
